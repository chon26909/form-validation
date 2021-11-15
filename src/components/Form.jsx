import React, { useState } from 'react';

const Form = () => {

    const [ username, setUsername ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ confimPassword, setConfirmPassword ] = useState("");

    const [ errorUsername, setErrorUsername ] = useState("");
    const [ errorEmail, setErrorEmail ] = useState("");
    const [ errorPassword, setErrorPassword ] = useState("");
    const [ errorConfirmPassword, setErrorConfirmPassword] = useState("");


    const submitForm = (e) => {
        // e.preventDefault();
        // console.log("submit");

        // if (username.length < 8) {
        //     setErrorUsername("ป้อนชื่อผู้ใช้ จำนวนมากว่า 8 ตัวอักษร")
        // }
    }

    return (
        <div className="container">
            <form onSubmit={e => submitForm(e)}>
                <h2>แบบฟอร์มลงทะเบียน</h2>
                <div className="form-control">
                    <label>ชื่อผู้ใช้งาน</label>
                    <input type="text" onChange={(e => setUsername(e.target.value))} />
                    <small>{errorUsername}</small>
                </div>
                <div className="form-control">
                    <label>อีเมล</label>
                    <input type="text" onChange={e => setEmail(e.target.value)}/>
                    <small>{errorEmail}</small>
                </div>
                <div className="form-control">
                    <label>รหัสผ่าน</label>
                    <input type="password" onChange={e => setPassword(e.target.value)} />
                    <small>{errorPassword}</small>
                </div>
                <div className="form-control">
                    <label>ยืนยันรหัสผ่าน</label>
                    <input type="password" onChange={e => setConfirmPassword(e.target.value)} />
                    <small>{errorConfirmPassword}</small>
                </div>
                <button type="submit">ลงทะเบียน</button>
            </form>
        </div>
    )
}

export default Form
