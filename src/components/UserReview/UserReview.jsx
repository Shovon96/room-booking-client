import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const UserReview = () => {

    const { user } = useContext(AuthContext)

    const handleReview = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const rating = form.rating.value;
        const comment = form.comment.value
        const review = { name, rating, comment }
        console.log(review);
    }

    return (
        <div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}>Review</button>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">Review This Room!!</h3>
                    <form onSubmit={handleReview}>
                        <input name="name" type="text" defaultValue={user.displayName} className="input input-ghost w-full max-w-xs" />
                        <input name="rating" type="text" placeholder="Please Reting This Room" className="input input-ghost w-full max-w-xs" />
                        <input name="comment" type="text" placeholder="Add a comment" className="input input-ghost w-full max-w-xs" /><br /><br />
                        <button className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default UserReview;