
const NewsLetter = () => {
    return (
        <div className="bg-blue-200 flex justify-center py-24">
            <div className="bg-white rounded-md shadow-lg py-6 px-14">
                <h3 className="text-2xl text-blue-500 font-bold">Subscribe to our newsletter</h3>
                <p className="my-2">Enter your Email address to reseve all <br /> notice form our awesome website</p>
                <div className="form-control">
                    <div className="input-group">
                        <input type="text" placeholder="Search…" className="input input-bordered" />
                        <button className="btn btn-primary">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;