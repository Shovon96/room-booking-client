import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const UserReview = ({ disableBtn }) => {

    const { user } = useContext(AuthContext)

    const handleReviewSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const rating = form.rating.value;
        const date = form.date.value;
        const comment = form.comment.value
        const review = { name, rating, date, comment }
        // form.replace()
        // console.log(review);

        fetch('https://room-booking-server-bice.vercel.app/reviews', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success('Thanks for your review!');
                }
            })
    }

    return (
        <div>
            <div>
                {
                    disableBtn ?
                        <button className="btn btn-primary" onClick={() => document.getElementById('my_modal_3').showModal()}>Review</button>
                        : <button className="btn btn-primary" disabled onClick={() => document.getElementById('my_modal_3').showModal()}>Review</button>
                }
            </div>

            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">Review This Room!</h3>
                    <form onSubmit={handleReviewSubmit}>
                        <input name="name" type="text" defaultValue={user.displayName} className="input input-ghost w-full max-w-xs" />
                        <input name="rating" type="text" placeholder="Please Reting This Room" className="input input-ghost w-full max-w-xs" />
                        <input name="date" type="date" className="input input-ghost w-full max-w-xs" />
                        <input name="comment" type="text" placeholder="Add a comment" className="input input-ghost w-full max-w-xs" /><br /><br />
                        <button className="btn btn-primary">Submit</button>
                        {/* <Link to='`/roomDetails' className="btn btn-primary">Submit</Link> */}
                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default UserReview;