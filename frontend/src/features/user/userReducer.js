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
        state.user=action.payload
        state.isAuthenticated=true
        state.status='success'
        localStorage.setItem('accessToken', action.payload.accessToken);
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
    state.loading=false;
    localStorage.clear()
}

export const updatePassword=(state, action)=> {
    state.loading= false;
    state.status=action.payload.message;
}

export const getUserReducer = (state, action) => {
    state.loading = false;
    state.user = action.payload;
    state.status = 'success';
}