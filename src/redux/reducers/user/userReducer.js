const initialState = {
    uid: '',
    userName: '',
    isUserLoggedIn: false,
    hobby: [],
    moreData: {
        city: '',
    },
};

const userReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'setId':
            return{
                ...state,
                uid:action.id,
            };
            
        case 'setUserName':
            return {
                ...state,
                userName:action.newName,

            };
        case 'setUserData':
            const [id,newName]=action.data;

            return{
                ...state,
                uid:id,
                userName:newName,
            };
            
        case 'setUserLoggedIn':
            return{
                ...state,
                isUserLoggedIn:action.isLoggedIn,
            };
            default:
                return state;
    }
}

export default userReducer;

// userReducer({ type: 'setId', id:1 })
// userReducer({ type: 'setUserName',newName:'Clove' })
// userReducer({ type: 'setUserData', data :{id:2,newName:'Neon'} })
// userReducer({ type: 'setIsUserLoggedIn',isLoggedIn:true })
