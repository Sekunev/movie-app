import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import {
  toastErrorNotify,
  toastSuccessNotify,
  toastWarnNotify,
} from "../assest/ToastMessage";
import { getAnalytics } from "firebase/analytics";

// TODO: Replace the following with your app's Firebase project configuration at project settings part
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyA1KnBVq77y34VmjYtMS71IkjS51XDFKwI",
  authDomain: "movie-app-6b224.firebaseapp.com",
  projectId: "movie-app-6b224",
  storageBucket: "movie-app-6b224.appspot.com",
  messagingSenderId: "970155631856",
  appId: "1:970155631856:web:f4b3c2aeb7709b8497ce35",
  measurementId: "G-RY4977N51B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

//! Yeni kullanıcıların e-posta adreslerini ve parolalarını kullanarak uygulamanıza kaydolmasına olanak tanıyan fonksiyon
export const createUser = async (email, password, navigate) => {
  //? yeni bir kullanıcı oluşturmak için kullanılan firebase metodu
  try {
    let userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    //? kullanıcı profilini güncellemek için kullanılan firebase metodu
    await updateProfile(auth.loggedUser, {});
    toastSuccessNotify("Registered successfully!");
    navigate("/");
    console.log(userCredential);
  } catch (err) {
    toastErrorNotify(err.message);
  }
};

//! Mevcut kullanıcıların e-posta adreslerini ve parolalarını kullanarak oturum açmalarını sağlayan fonksiyon
export const getUser = async (email, password, navigate) => {
  //? mevcut kullanıcının giriş yapması için kullanılan firebase metodu
  try {
    let userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    navigate("/");
    toastSuccessNotify("Logged in successfully!");
    // sessionStorage.setItem('user', JSON.stringify(userCredential.user));
    console.log(userCredential);
  } catch (err) {
    toastErrorNotify(err.message);
    console.log(err);
  }
};

//! Bu gözlemci, kullanıcının oturum açma durumu her değiştiğinde çağrılır.
export const onAuthStateChangedUser = (setLoggedUser, setLoading) => {
  //? Kullanıcının signin olup olmadığını takip eden ve kullanıcı değiştiğinde yeni kullanıcıyı response olarak dönen firebase metodu
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setLoggedUser(user);
      // setLoading(false);
    } else {
      // User is signed out
      setLoggedUser(false);
      // setLoading(false);
    }
  });
};

//! Oturumu Kapatmak için Fonksiyon.
export const signOutUser = () => {
  signOut(auth)
    .then(() => {})
    .catch((error) => {
      console.log(error);
    });
};

//! Google'ı Popup ile Kullanarak Kimlik Doğrulamak için fonksiyon
//* https://console.firebase.google.com/
//* => Authentication => sign-in-method => enable Google
//! Google ile girişi enable yap
//* => Authentication => settings => Authorized domains => add domain
//! Projeyi deploy ettikten sonra google sign-in çalışması için domain listesine deploy linkini ekle adres yukarıda.
export const signUpProvider = (navigate) => {
  //? Google ile giriş yapılması için kullanılan firebase metodu
  const provider = new GoogleAuthProvider();
  //? Açılır pencere ile giriş yapılması için kullanılan firebase metodu
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
      navigate("/");
      toastSuccessNotify("Logged out successfully!");
    })
    .catch((error) => {
      // Handle Errors here.
      console.log(error);
    });
};
