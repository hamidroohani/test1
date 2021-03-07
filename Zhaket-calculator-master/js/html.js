window.htmlToolBox = () => {
    return `
<div class="robot-binance-popup" id="robot-binance-popup"><img src="${chrome.extension.getURL('/badge.png')}" alt="open"></div>

<div class="buy-panel">
    <div class="first">خرید و فروش</div>
    <div class="price-panel">
        <div class="buy">
            <span>قیمت خرید</span>
            <span>۱۲۳</span>
        </div>
        <div class="now">
            <span>قیمت اکنون</span>
            <span>۴۵۶</span>
        </div>
        <div class="sell">
            <span>قیمت فروش</span>
            <span>۷۸۹</span>
        </div>
    </div>
    <div class="buy-form">
        <div class="price">
            <span>درصد خرید از سرمایه</span>
            <input type="number">
        </div>
        <div class="stop">
            <span>درصد استاپ</span>
            <input type="number" id="myStopAfterBuy">
        </div>
        <div class="submit"><span>خرید</span></div>
     </div>
</div>
`

};
