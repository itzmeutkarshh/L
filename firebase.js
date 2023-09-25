import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
    import {FacebookAuthProvider,GoogleAuthProvider, signInWithPopup} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
    import { getDatabase, get,ref ,set}from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js"
    import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  
    // Your web app's Firebase configuration
    // For Firebase JS SDK v10.4.0 
    const loginPage=document.querySelector('.login-page');
    const loginBtn=document.getElementById('login-btn');

    const firebaseConfig = {
      apiKey: "AIzaSyDrX9_4UkoLd7THeH7xBAQisIOOsjQrvlA",
      authDomain: "library-store-ee5a4.firebaseapp.com",
      projectId: "library-store-ee5a4",
      storageBucket: "library-store-ee5a4.appspot.com",
      messagingSenderId: "953404911469",
      appId: "1:953404911469:web:42d179f3d82a50433f3464"
    };
  
   
    const app = initializeApp(firebaseConfig);
    const database= getDatabase(app);
    const auth = getAuth(app);
    const provider=new GoogleAuthProvider(app);
    const provider2=new FacebookAuthProvider(app);
    console.log(app);

   
	  document.getElementById("register").addEventListener("click", function() {
		  var email =  document.getElementById("email").value;
		  var password = document.getElementById("password").value;
		  //For new registration
		  createUserWithEmailAndPassword(auth, email, password)
		  .then((userCredential) => {
		    // Signed in 
		    const user = userCredential.user;
           
        loginPage.classList.toggle('show-login-page');
		    alert("Registration successfully!!");
        loginBtn.innerText="Sign Out";

		    
		  })
		  .catch((error) => {
		    const errorCode = error.code;
		    const errorMessage = error.message;
		   
		    console.log(errorMessage);
		    alert(error);
		  });		  		  
	  });
	
		  
	  document.getElementById("login").addEventListener("click", function() {
        
		  var email =  document.getElementById("login_email").value;
		  var password = document.getElementById("login_password").value;

		  signInWithEmailAndPassword(auth, email, password)
		  .then((userCredential) => {
		    // Signed in 
		    const user = userCredential.user;
		    console.log(user);
		    alert(user.email+" Login successfully!!!")
        loginPage.classList.toggle('show-login-page');
        
        loginBtn.innerText="Sign Out";
		  })
		  .catch((error) => {
		    const errorCode = error.code;
		    const errorMessage = error.message;
		    console.log(errorMessage);
		    alert(errorMessage);
		  });		  		  
	  });
     
      document.getElementById("googleBtnIn").addEventListener('click',(e)=>{
        signInWithPopup(auth,provider)
        .then((result)=>{
            const credential= GoogleAuthProvider.credentialFromResult(result);
            const token=credential.accessToken;

            const user=result.user;
            alert(user.displayName);
  
            loginPage.classList.toggle('show-login-page');
            
            loginBtn.innerText="Sign Out";
        }).catch((error)=>{
            const errorCode = error.code;
		    const errorMessage = error.message;

            const email=error.email;

            const credential= GoogleAuthProvider.credentialFromResult(error);;
        });
      });

           
        document.getElementById("googleBtnUp").addEventListener('click',(e)=>{
        signInWithPopup(auth,provider)
        .then((result)=>{
            const credential= GoogleAuthProvider.credentialFromResult(result);
            const token=credential.accessToken;

            const user=result.user;
            alert(user.displayName);
  
            loginPage.classList.toggle('show-login-page');
            
            loginBtn.innerText="Sign Out";
        }).catch((error)=>{
            const errorCode = error.code;
		    const errorMessage = error.message;

            const email=error.email;

            const credential= GoogleAuthProvider.credentialFromResult(error);;
        });
      });

     
	document.getElementById("logout").addEventListener("click", function() {
	 	  signOut(auth).then(() => {
			  
			  console.log('Sign-out successful.');
			  alert('Sign-out successful.');
			  document.getElementById('logout').style.display = 'none';
			}).catch((error) => {
	
	 		  console.log('An error happened.');
			});		  		  
	  });
	  
