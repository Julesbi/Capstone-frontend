let app_fireBase={};
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAX6KoFLdbciStKChY88MYP4LV7CirU7xU",
    authDomain: "capstone-project-ad2c4.firebaseapp.com",
    projectId: "capstone-project-ad2c4",
    storageBucket: "capstone-project-ad2c4.appspot.com",
    messagingSenderId: "450642836895",
    appId: "1:450642836895:web:73e4e1faa208225f31d1aa",
    measurementId: "G-MZNLCYF46V"
  };
(()=>{
    firebase.initializeApp(firebaseConfig)
    app_fireBase=firebase;
    /***********************create******************/
    const createFnc = (path,body,callback)=>{
        if(!path||!body) return;
        app_fireBase.database().ref(path).set(body,callback)
    }
    /***********************read****************** */
    const readFnc=()=>{

    }
    /**********************Update***************** */
    const updateFnc = () =>{

    }
    /***********************Delete***************** */
    const deleteFnc = () =>{

    }
    app_fireBase.databaseApi={
        create: createFnc
    }

})()
// console.log(app_fireBase)