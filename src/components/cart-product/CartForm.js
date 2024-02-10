import React, { useState, memo, useRef } from "react";

function CartForm({ data }) {
    // const SendMessage = (e) => {
    //     e.preventDefault();

    //     var name = document.getElementById("name").value;
    //     var phone_number = document.getElementById("phone_number").value;
    //     var location = document.getElementById("location").value;
    //     var message = document.getElementById("message").value;

    //     var my_text = `<b>Исм</b>: <i>${name}</i> %0A <b>Телефон Номер</b>: <i>${phone_number}</i> %0A <b>Адресс</b>: <i>${location}</i> %0A <b>Сообщение</b>: <i>${message}</i>`;

    //     var token = "6844770680:AAHJxjHu9JzEH9UjSCKqhAbM5ixhm6v2tes";
    //     var chat_id = -4140340215;

    //     var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}&parse_mode=html`;

    //     let api = new XMLHttpRequest();
    //     api.open("GET", url, true);
    //     api.send();

    //     console.log("Message sent successfully");
    //     document.getElementById("name").value = "";
    //     document.getElementById("phone_number").value = "";
    //     document.getElementById("location").value = "";
    //     document.getElementById("message").value = "";
    // };

    const tel = useRef();
    const address = useRef();
    const message = useRef();
    const [fullName, setFullName] = useState("");

    var token = "6844770680:AAHJxjHu9JzEH9UjSCKqhAbM5ixhm6v2tes";
    var chat_id = -4140340215;
    var user_id = 5036113919;

    const handleSubmit = (e) => {
        e.preventDefault();

        // var my_text = `<b>Исм</b>: <i>${fullName}</i> %0A <b>Телефон Номер</b>: <i>${address}</i> %0A <b>Адресс</b>: <i>${address}</i> %0A <b>Сообщение</b>: <i>${message}</i>`;

        let text = "Buyurtma %0A%0A";

        text += `Ism: ${fullName} %0A`;
        text += `Telefon: ${tel.current.value} %0A`;
        text += `Address: ${address.current.value} %0A`;
        text += `Message: ${message.current.value} %0A%0A`;

        data?.map((item) => {
            text += `Title: ${item.title} %0A`;
            text += `Category: ${item.category} %0A`;
            text += `Price: ${item.price.brm()} %0A`;
            text += `Quantity: ${item.quantity} %0A%0A`;
        });

        text += `Total Price: ${data
            .reduce((a, b) => a + b.price * b.quantity, 0)
            .brm()}`;

        var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${user_id}&text=${text}&parse_mode=html`;

        let api = new XMLHttpRequest();
        api.open("GET", url, true);
        api.send();
    };

    return (
        <div className="input__reg">
            <h3>Ma'lumotlarni to'ldiring:</h3>
            <form action="" onSubmit={handleSubmit}>
                <input
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    type="text"
                    placeholder="To'liq ismingiz"
                    id="name"
                />
                <input
                    ref={tel}
                    type="text"
                    placeholder="+998 00-000-00-00"
                    id="phone_number"
                />
                <input
                    ref={address}
                    type="text"
                    placeholder="Manzilingiz"
                    id="location"
                />
                <input
                    ref={message}
                    required
                    type="text"
                    placeholder="Habar yo'llash"
                    id="message"
                />
                <div className="total">
                    <p>Umumiy narx:</p>
                    <b>
                        {data
                            .reduce((a, b) => a + b.price * b.quantity, 0)
                            .brm()}{" "}
                        so'm
                    </b>
                </div>
                <button type="submit" className="btn-reg">
                    Rasmiylashtirishga o'tish
                </button>
            </form>
        </div>
    );
}

export default memo(CartForm);
