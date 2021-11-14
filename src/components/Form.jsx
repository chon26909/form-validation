import React from 'react'

const Form = () => {
    return (
        <div className="container">
            <form>
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
            </form>
        </div>
    )
}

export default Form
