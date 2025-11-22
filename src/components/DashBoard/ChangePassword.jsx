import React, { useContext, useState } from "react";

import { updatePassword, reauthenticateWithCredential, EmailAuthProvider } from "firebase/auth";
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/AuthContext/Authcontex";

const ChangePassword = () => {
    const { user } = useContext(AuthContext);

    const [oldPass, setOldPass] = useState("");
    const [newPass, setNewPass] = useState("");
    const [confirmPass, setConfirmPass] = useState("");

    const handleChangePassword = async (e) => {
        e.preventDefault();

        if (!user) {
            Swal.fire("Error", "You must be logged in!", "error");
            return;
        }

        if (newPass !== confirmPass) {
            Swal.fire("Error", "New passwords do not match!", "error");
            return;
        }

        try {
            // Step 1: Re-authenticate user
            const credential = EmailAuthProvider.credential(user.email, oldPass);
            await reauthenticateWithCredential(user, credential);

            // Step 2: Update password
            await updatePassword(user, newPass);

            Swal.fire("Success", "Password changed successfully!", "success");

            setOldPass("");
            setNewPass("");
            setConfirmPass("");
        } catch (err) {
            console.log(err);
            Swal.fire("Error", err.message, "error");
        }
    };

    return (
        <div className="max-w-xl mx-auto p-8 shadow-lg mt-10 bg-white">
            <h1 className="text-2xl font-bold text-center text-[#5B3E38] mb-6">Change Password</h1>

            <form onSubmit={handleChangePassword} className="flex flex-col gap-4">
                <input
                    type="password"
                    value={oldPass}
                    onChange={(e) => setOldPass(e.target.value)}
                    placeholder="Current Password"
                    className="border p-3"
                    required
                />

                <input
                    type="password"
                    value={newPass}
                    onChange={(e) => setNewPass(e.target.value)}
                    placeholder="New Password"
                    className="border p-3"
                    required
                />

                <input
                    type="password"
                    value={confirmPass}
                    onChange={(e) => setConfirmPass(e.target.value)}
                    placeholder="Confirm New Password"
                    className="border p-3"
                    required
                />

                <button
                    type="submit"
                    className="bg-[#AA8265] text-white p-3 font-medium"
                >
                    Update Password
                </button>
            </form>
        </div>
    );
};

export default ChangePassword;
