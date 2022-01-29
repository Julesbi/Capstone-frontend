let mainFuncs= {};
(() => {
    let uid=null;
    // app_fireBase.auth().createUserWithEmailAndPassword(email="practice2@gmail.com",password="_jules12345")
    // .then((user)=>console.log(user))
    // .catch((err) =>console.log(err))
    app_fireBase.auth().signInWithEmailAndPassword(email="practice2@gmail.com",password="_jules12345")
    .then((credentials)=> uid = credentials.user.uid)
    .catch((err) =>console.log(err))
    const messageHandler= (err) =>{
        if(!!err){
            console.log(err)
        } else{
            console.log("request success")
        }
    }
    /**********************create function */
    function createFnc(e){
        e.preventDefault()
        const path =`users/${uid}`
        // const form =document.getElementsByTagName('form')

        const email= document.getElementById('#email').value
        const yrpassword= document.getElementById('#Password').value

        console.log(email,yrpassword)
        const data={
            email,
            Password:yrpassword,
        };
        app_fireBase.databaseApi.create(path,data,messageHandler)

    }

    /***********************Read function */
    function readFnc(){

    }
    /************************Update function */
    function updateFnc(){

    }
    /************************Delete function */
    function deleteFnc(){

    }
    mainFuncs.create=createFnc;

}
)()