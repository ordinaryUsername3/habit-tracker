

export const handlePending = (state) => {
            state.loading=true
        }
export const handleRejected = (state, action) => {
    state.loading=false
    state.error=action.error.message
    state.status='false'
}
export const setUserData = (state, action) => {
        state.loading=false
        state.user.name=action.payload.name
        state.user.age=action.payload.age
        state.user.email=action.payload.email
        state.user._id = action.payload._id
        state.isAuthenticated=true
        state.status='success'
}
export const updateUserData = (state, action) => {
    console.log(action.payload);
}

export const fetchUser = (state, action) => {
            state.loading=false
            state.user=action.payload,
            state.status='success'
}

export const deleteUserReducer = (state, action) => {
            state.loading=false
            state.user=action.payload,
            state.status='success'
}


export const logout=(state, action)=> {
    state.status=action.payload;
    state.loading=false
}

export const updatePassword=(state, action)=> {
    state.loading= false;
    state.status=action.payload.message;
}