window.addEventListener("load", function () {

    let myAllVal = document.querySelector("#__APP > div > div > div.css-12zxtqt > div > div.css-3j2kqe > div:nth-child(2) > div > div.css-1mcmbgc > span").textContent;
    myAllVal = Math.abs(myAllVal.replace(/[^0-9.]+/ig,""));

    document.body.insertAdjacentHTML('beforeend', htmlToolBox());

    // open box
    document.querySelector("#orderformBuyBtn").addEventListener('click', async () => {
        toggleInterval();
    });
    document.querySelector('.buy-form .submit > span').addEventListener('click', async () => {
        document.querySelector("#__APP > div > div > div.css-12zxtqt > div > div.css-1txw6ev > div.css-1gfgxlv > div > div > span").click();
        document.getElementById('FormRow-SELL-stopPrice').value = '20';
        document.getElementById('FormRow-SELL-stopLimitPrice').value = '19';
        let myPercent = Math.abs(document.getElementById('myStopAfterBuy').value) / 100;

        document.getElementById('FormRow-SELL-quantity').value = '4';
        document.querySelector('#orderformSellBtn').click();
        setTimeout(()=>{
            // document.querySelector("body > div.css-qx1kp5 > div > div.modal-footer > div > button.css-s7ibtx").click();
        },200)
    });
    document.querySelector('.robot-binance-popup').addEventListener('click', async () => {

        let date = prompt('لطفا سال و ماه دریافتی را به صورت زیر وارد کنید: \n 1399/11 \n 1399/11/28');

        if (date === null)
            return null;

        if (!window.location.href.includes('https://www.binance.com/dashboard/transactions'))
            return alert('این قابلیت فقط در بخش مالی > تراکنش ها در دسترس می باشد.');

        if (document.querySelector('.robot-binance-popup').classList.value === 'robot-binance-popup loading')
            return null;

        document.querySelector('.robot-binance-popup').classList.add('loading');

        await window.start_calculator_f(date);

        document.querySelector('.robot-binance-popup').classList.remove('loading');

    });


    let myInterval = setInterval(()=>{
        let buyPrice = document.querySelector('.orderbook-list:last-child .orderbook-progress:first-child .bid-light');
        if (buyPrice)
        {
            buyPrice = buyPrice.textContent;
            document.querySelector('.buy-panel > .price-panel > .buy > span:last-child').textContent = buyPrice;
        }

        let nowPrice = document.querySelector('.contractPrice');
        if (nowPrice)
        {
            nowPrice = nowPrice.textContent;
            document.querySelector('.buy-panel > .price-panel > .now > span:last-child').textContent = nowPrice;
        }

        let sellPrice = document.querySelector('.orderbook-list:first-child .orderbook-progress:last-child  .ask-light');
        if (sellPrice)
        {
            sellPrice = sellPrice.textContent;
            document.querySelector('.buy-panel > .price-panel > .sell > span:last-child').textContent = sellPrice;
        }
    },100);

    let valueToBuy = 0;
    var intervalId;
    function toggleInterval() {
        if (!intervalId) {
            valueToBuy = Math.abs(document.querySelector("#FormRow-BUY-quantity").value);
            intervalId = setInterval(function(){
                setStop(valueToBuy);
            }, 460);
        } else {
            clearInterval(intervalId);
            intervalId = null;
            toggleInterval();
        }
    }

    function setStop(valueToBuy){
        console.log('valueToBuy:'+valueToBuy);
        if (valueToBuy)
        {
            let newMyAllVal = document.querySelector("#__APP > div > div > div.css-12zxtqt > div > div.css-3j2kqe > div:nth-child(2) > div > div.css-1mcmbgc > span").textContent;
            newMyAllVal = Math.abs(newMyAllVal.replace(/[^0-9.]+/ig,""));
            console.log('mines:'+ (newMyAllVal - myAllVal));
            console.log("df");
            if ((newMyAllVal - myAllVal) > (valueToBuy * .9))
            {
                setTimeout(()=>{
                    let myPercent = Math.abs(document.getElementById('myStopAfterBuy').value) / 100;

                    document.querySelector("#__APP > div > div > div.css-12zxtqt > div > div.css-1txw6ev > div.css-1gfgxlv > div > div > span").click();
                    let nowPrice = document.querySelector('.contractPrice');
                    if (nowPrice)
                    {
                        nowPrice = nowPrice.textContent;
                        // nowPrice = nowPrice * myPercent;
                    }
                    console.log('nowPrce:' + nowPrice);
                    document.getElementById('FormRow-SELL-stopPrice').value = nowPrice;
                    document.getElementById('FormRow-SELL-stopLimitPrice').value = nowPrice;
                    document.getElementById('FormRow-SELL-quantity').value = (newMyAllVal-1);
                    document.querySelector('#orderformSellBtn').click();
                    setTimeout(()=>{
                        // document.querySelector("body > div.css-qx1kp5 > div > div.modal-footer > div > button.css-s7ibtx").click();
                    },200);
                },200);
            }
        }

    }
});
