import React, { useState } from 'react';

const Form = () => {

    const [ username, setUsername ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ confimPassword, setConfirmPassword ] = useState("")

    return (
        <div className="container">
            <form>
                <h2>แบบฟอร์มลงทะเบียน</h2>
                <div className="form-control">
                    <label>ชื่อผู้ใช้งาน</label>
                    <input type="text" />
                    <small>error message</small>
                </div>
                <div className="form-control">
                    <label>อีเมล</label>
                    <input type="text" />
                    <small>error message</small>
                </div>
                <div className="form-control">
                    <label>รหัสผ่าน</label>
                    <input type="text" />
                    <small>error message</small>
                </div>
                <div className="form-control">
                    <label>ยืนยันรหัสผ่าน</label>
                    <input type="text" />
                    <small>error message</small>
                </div>
                <button type="submit">ลงทะเบียน</button>
            </form>
        </div>
    )
}

export default Form
