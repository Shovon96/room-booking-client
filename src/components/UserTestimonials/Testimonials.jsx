import { AiFillFacebook, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

const Testimonials = () => {
    return (
        <>
        <div>
            <h1 className="text-4xl font-bold mt-12 text-center">Customer Testimonials</h1>
            <hr />
        </div>
            <div className=" my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
                <div className="shadow-md rounded-md p-3">
                    <img className="h-20 w-20 rounded-full" src="https://media.discordapp.net/attachments/1163919577130999870/1170830959894081536/photo-1633332755192-727a05c4013d.png?ex=655a784d&is=6548034d&hm=c08e45282baf2da97c3be4906b59944ad52cd6b7c1de23f0a95c293167f8eb29&=&width=423&height=423" alt="" />
                    <p>Our well-appointed rooms and suites are designed with your comfort in mind. Immerse yourself in plush bedding, stylish decor, and breathtaking views, creating the perfect retreat after a day of exploration.</p>
                    <div className="rating my-4">
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" checked />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                    </div>
                    <div className="flex gap-4 text-2xl">
                        <AiFillLinkedin></AiFillLinkedin>
                        <AiFillFacebook></AiFillFacebook>
                        <AiFillInstagram></AiFillInstagram>
                    </div>
                </div>
                <div className="shadow-md rounded-md p-3 ">
                    <img className="h-20 w-20 rounded-full" src="https://media.discordapp.net/attachments/1163919577130999870/1170840664469155840/photo-1519085360753-af0119f7cbe7.png?ex=655a8157&is=65480c57&hm=2a2652503af625573456db98dcbe66916f13e72067c9c682181ed74ab917e98b&=&width=282&height=423" alt="" />
                    <p>Unwind by the sparkling pool, rejuvenate at our spa, or stay active in our state-of-the-art fitness center. Tranquil Haven Hotel offers a range of recreational facilities to suit every mood and preference.</p>
                    <div className="rating">
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" checked />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                    </div>
                    <div className="flex gap-4 text-2xl">
                        <AiFillLinkedin></AiFillLinkedin>
                        <AiFillFacebook></AiFillFacebook>
                        <AiFillInstagram></AiFillInstagram>
                    </div>
                </div>
                <div className="shadow-md rounded-md p-3 ">
                    <img className="h-20 w-20 rounded-full" src="https://media.discordapp.net/attachments/1163919577130999870/1170840190164680775/premium_photo-1664298528358-790433ba0815.png?ex=655a80e6&is=65480be6&hm=9e17017873d9db8bdf5d82414d69b8780778252ff6ea17bdf9a0095cf6e4472a&=&width=634&height=423" alt="" />
                    <p>Indulge your palate at our on-site restaurant, where culinary delights await. From gourmet cuisine to local specialties, our chefs curate a menu that caters to every taste, ensuring a gastronomic journey like no other.</p>
                    <div className="rating">
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" checked />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                    </div>
                    <div className="flex gap-4 text-2xl">
                        <AiFillLinkedin></AiFillLinkedin>
                        <AiFillFacebook></AiFillFacebook>
                        <AiFillInstagram></AiFillInstagram>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Testimonials;