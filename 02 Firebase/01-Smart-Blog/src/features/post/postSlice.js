import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {db , auth} from '../../firebase';
import { getDocs , collection , addDoc , serverTimestamp , deleteDoc , doc , updateDoc} from 'firebase/firestore';

// a thunk to display all post 

export const fetchpost = createAsyncThunk( 'post/fetchPost' , async ()=>{
     // 1. Reference the 'posts' collection
    const postRef = collection( db , 'posts');
     // 2. Get all documents from that collection 
    const querySnapshot = await getDocs( postRef );
      // 3. Process the results into a clean array of objects
    const post = querySnapshot.docs.map((doc)=>({
        id : doc.id,
        ...doc.data(),
        createdAt :doc.data().createdAt?.toDate().toISOString() || null,
    }))

    return post ;
})


// Thunk to create a new post document in the 'posts' collection

export const createPost =  createAsyncThunk ( 'post/createPost' , async (postData)=>{
    
    const { title , content} = postData ;

    const postReference = collection( db , 'posts');

    //  Add a new document with the provided data.

    const docRef = await addDoc ( postReference , {
        title : title ,
        content : content ,
        authorId : auth.currentUser.uid , 
        authorName : auth.currentUser.displayName ,
        photoURL : auth.currentUser.photoURL , 
        createdAt: serverTimestamp() 
    } )


        // For instant UI feedback, we can return the newly created post data
    return { 
    id: docRef.id, 
    title, 
    content,
    authorId: auth.currentUser.uid,
    authorName: auth.currentUser.displayName,
    photoURL: auth.currentUser.photoURL,
    createdAt: new Date().toISOString() // Use local time for the optimistic update
  };

})


//delete post 
export const deletePost = createAsyncThunk('posts/deletePost' , async(postId , { rejectWithValue })=>{
    try{
        const dataRef = doc(db , 'posts' , postId);
        await deleteDoc( dataRef)
          return postId;
    }catch(err){
        console.error("Delete Post Error:", err);
        return rejectWithValue(err.message);
    }
})

export const editPost = createAsyncThunk( 'posts/editPost' , async (postData , {rejectWithValue})=>{
   const {id , title , content} = postData ;
    try{
        const docRef = doc(db , 'posts' , id);
        await updateDoc(docRef ,{
            title:title,
            content:content
        } )
        return { id, title, content };
    }catch(err){
        console.log("unable to edit the blog " + err.msg);
         return rejectWithValue(err.message);
    }
})

// THE SLICE ITSELF (The state and the reducers) 

const  initialState = { 
    items : [] ,
    status : 'idle',
    error : null 
}
 const postsSlice = createSlice ( {
    name : 'post',
    initialState ,
    extraReducers(builder) {
        builder
    // --- Cases for fetchPosts ---
        .addCase(fetchpost.pending , (state )=>{
            state.status = 'loading';
        })
        .addCase ( fetchpost.fulfilled , (state , action ) =>{
            state.status = 'succeeded';
            state.items = action.payload ; 
        })
        .addCase(fetchpost.rejected , (state , action  )=>{
            state.status = 'failed' ;
            state.error = action.error.message;
        })

          // --- Case for createPost ---

        .addCase (createPost.fulfilled , (state ,action )=>{
            state.items.unshift(action.payload);
        } )

        .addCase(createPost.rejected, (state, action) => {
                // Handle the error if post creation fails
                state.error = action.error.message;
            })

            //Delete post 

        .addCase(deletePost.fulfilled , (state,action) => {
                const deletedPostId = action.payload ;
                state.items = state.items.filter(post => post.id  !== deletedPostId)
                 state.status = 'succeeded';
        })

        .addCase(deletePost.rejected , (state,action) => {
             state.status = 'failed';
             state.error = action.payload;
        })

        //updatePost 
        .addCase (editPost.fulfilled , (state , action)=>{
             const { id, title, content } = action.payload;
            const existingPost = state.items.find(post => post.id === id);
            if(existingPost){
                existingPost.title = title ;
                existingPost.content = content ;
            }
        })
    }
})

export default postsSlice.reducer;