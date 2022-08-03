import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import { auth } from '../firebase'
import Nav from "./Nav"
import './Profile.css'

const Profile = () => {
    const user = useSelector(selectUser);
    return (
        <div className='profileScreen'>
            <Nav />
            <div className='profileScreen_body'>
                <h1>Edit Profile</h1>
                <div className='profileScreen_info'>
                    <img src='https://p7.hiclipart.com/preview/184/113/161/user-profile-computer-icons-clip-art-profile.jpg' alt='' />
                    <div className='profileScreen_details'>
                        <h2>{user.email}</h2>
                        <div className='profileScreen_plans'>
                            <h3>Plans</h3>
                            <div className='profileScreen_plan'>
                                <div className='profileScreen_planInfo'>
                                    <h5>Mobile 199</h5>
                                    <p>Watch on 1 mobile phone or tablet at a time in Standard Definition. Download videos on 1 phone or tablet.</p>
                                </div>

                            </div>
                            <div className='profileScreen_plan'>
                                <div className='profileScreen_planInfo'>
                                    <h5>Basic 499</h5>
                                    <p>Watch on 1 screen at a time in Standard Definition. Download videos on 1 phone or tablet.</p>
                                </div>
                            </div>
                            <div className='profileScreen_plan'>
                                <div className='profileScreen_planInfo'>
                                    <h5>Standard 649</h5>
                                    <p>Watch on 2 screens at a time. Full HD (1080p) available. Download videos on 2 phones or tablets.</p>
                                </div>
                            </div>
                            <div className='profileScreen_plan'>
                                <div className='profileScreen_planInfo'>
                                    <h5>Premium 799</h5>
                                    <p>Watch on 4 screens at a time. Full HD (1080p) and Ultra HD (4K) available. Download videos on 4 phones or tablets.</p>
                                </div>
                            </div>
                        </div>
                        <button onClick={() => auth.signOut()} className='profileScreen_signout'>Sign Out</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Profile

// import React, { useContext, useEffect, useState } from 'react'
// import { auth, db } from './firebase'
// import Nav from './Nav'
// import './ProfileScreen.css'
// import UserContext from './UserContext'

// const ProfileScreen = () => {

//     const {user, setUser} = useContext(UserContext)
//     const history = useHistory()
//     const [plan, setPlan] = useState(null)

//     useEffect(()=> {
//         db.collection("users").doc(user.email).get()
//         .then((doc) => {
//             setPlan(doc.data().plan)
//         })
//         .catch((err) => {
//             console.log(err)
//         })
//     }, [])

//     const updatePlan = (newPlan) => {
//         setPlan(newPlan)
//         db.collection("users").doc(user.email).update({
//             plan: newPlan
//         }).then(() => {
//             console.log("Document successfully updated!")
//         }).catch((err) => {
//             console.error(err)
//         })
//     }

//     const signout = () => {
//         auth.signOut()
//         setUser(null)
//         history.push('/')
//     }

