const data = [
    {
        product: 'Elevate your makeup',
        brand: 'romand',
        price: 'US $11.14',
        deal: 'Deal is 88% claimed',
        image: 'https://www.yesstyle.com/_next/image?url=https://ddvql06zg3s2o.cloudfront.net/Assets/res/imgs/creative/23wk10/pb_romand.jpg&w=640&q=80'
    },
    
    {
        product: '30-Day Skin Reset',
        brand: 'SOME BY MI',
        price: 'US $11.14',
        deal: 'Deal is 88% claimed',
        image: 'https://www.yesstyle.com/_next/image?url=https://ddvql06zg3s2o.cloudfront.net/Assets/res/imgs/creative/23wk10/pb_some_by_mi.jpg&w=640&q=80'
    },
    {
        product: 'The Power of Black Rice',
        brand: 'Haruharu WONDER',
        price: 'US $11.14',
        deal: 'Deal is 88% claimed',
        image: 'https://www.yesstyle.com/_next/image?url=https://ddvql06zg3s2o.cloudfront.net/Assets/res/imgs/creative/23wk10/pb_haruharu_wonder.jpg&w=640&q=80'
    },
    {
        product: 'Blemish Control',
        brand: 'AXIS - Y',
        price: 'US $11.14',
        deal: 'Deal is 88% claimed',
        image: 'https://www.yesstyle.com/_next/image?url=https://ddvql06zg3s2o.cloudfront.net/Assets/res/imgs/creative/23wk10/pb_axis_y.jpg&w=640&q=80'
    },
    {
        product: 'Everyday Beauty Essentials',
        brand: 'Kao',
        price: 'US $11.14',
        deal: 'Deal is 88% claimed',
        image: 'https://www.yesstyle.com/_next/image?url=https://ddvql06zg3s2o.cloudfront.net/Assets/res/imgs/creative/23wk10/pb_kao.jpg&w=640&q=80'
    },
    {
        product: 'Royal Pampering',
        brand: 'Sulwhasoo',
        price: 'US $11.14',
        deal: 'Deal is 88% claimed',
        image: 'https://www.yesstyle.com/_next/image?url=https://ddvql06zg3s2o.cloudfront.net/Assets/res/imgs/creative/23wk10/pb_sulwhasoo.jpg&w=640&q=80'
    },
    {
        product: 'Pocket-Sized Skin Care',
        brand: 'KAHI',
        price: 'US $11.14',
        deal: 'Deal is 88% claimed',
        image: 'https://www.yesstyle.com/_next/image?url=https://ddvql06zg3s2o.cloudfront.net/Assets/res/imgs/creative/23wk10/pb_kahi.jpg&w=640&q=80'
    },
    {
        product: 'Barrier Builders',
        brand: 'ma:nyo',
        price: 'US $11.14',
        deal: 'Deal is 88% claimed',
        image: 'https://www.yesstyle.com/_next/image?url=https://ddvql06zg3s2o.cloudfront.net/Assets/res/imgs/creative/23wk10/pb_manyo.jpg&w=640&q=80'
    },
    {
        product: 'Household Necessities',
        brand: 'Kobayashi',
        price: 'US $11.14',
        deal: 'Deal is 88% claimed',
        image: 'https://www.yesstyle.com/_next/image?url=https://ddvql06zg3s2o.cloudfront.net/Assets/res/imgs/creative/23wk10/pb_kobayashi.jpg&w=640&q=80'
    },
    {
        product: '1',
        brand: 'romand',
        price: 'US $11.14',
        deal: 'Deal is 88% claimed',
        image: 'https://www.yesstyle.com/_next/image?url=https://ddvql06zg3s2o.cloudfront.net/Assets/res/imgs/creative/23wk10/pb_romand.jpg&w=640&q=80'
    },
    {
        product: '2',
        brand: 'romand',
        price: 'US $11.14',
        deal: 'Deal is 88% claimed',
        image: 'https://www.yesstyle.com/_next/image?url=https://ddvql06zg3s2o.cloudfront.net/Assets/res/imgs/creative/23wk10/pb_romand.jpg&w=640&q=80'
    },
    {
        product: '3',
        brand: 'romand',
        price: 'US $11.14',
        deal: 'Deal is 88% claimed',
        image: 'https://www.yesstyle.com/_next/image?url=https://ddvql06zg3s2o.cloudfront.net/Assets/res/imgs/creative/23wk10/pb_romand.jpg&w=640&q=80'
    },
    {
        product: '4',
        brand: 'romand',
        price: 'US $11.14',
        deal: 'Deal is 88% claimed',
        image: 'https://www.yesstyle.com/_next/image?url=https://ddvql06zg3s2o.cloudfront.net/Assets/res/imgs/creative/23wk10/pb_romand.jpg&w=640&q=80'
    },
    {
        product: '5',
        brand: 'romand',
        price: 'US $11.14',
        deal: 'Deal is 88% claimed',
        image: 'https://www.yesstyle.com/_next/image?url=https://ddvql06zg3s2o.cloudfront.net/Assets/res/imgs/creative/23wk10/pb_romand.jpg&w=640&q=80'
    },
    {
        product: '6',
        brand: 'romand',
        price: 'US $11.14',
        deal: 'Deal is 88% claimed',
        image: 'https://www.yesstyle.com/_next/image?url=https://ddvql06zg3s2o.cloudfront.net/Assets/res/imgs/creative/23wk10/pb_romand.jpg&w=640&q=80'
    },
    {
        product: 'Dew Tint - 14 Colors',
        brand: 'romand',
        price: 'US$ 16.00',
        deal: 'Deal is 88% claimed',
        image: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/01/429/M_p0166142901.jpg'
    },
    {
        product: 'Matte Sun Stick',
        brand: 'romand',
        price: 'US$ 14.40',
        deal: 'Deal is 88% claimed',
        image: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/13/138/M_p0188313813.jpg'
    },
    {
        product: 'Glow Deep Serum',
        brand: 'romand',
        price: 'US$ 12.75',
        deal: 'Deal is 88% claimed',
        image: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/32/268/M_p0153126832.jpg'
    },
    {
        product: 'Acne Pimple Master Patch',
        brand: 'romand',
        price: 'US$ 3.08',
        deal: 'Deal is 88% claimed',
        image: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/07/812/M_p0056481207.jpg'
    },
    {
        product: 'NEW Last Auto Gel Eyeliner - 10 Colors',
        brand: 'romand',
        price: 'US$ 5.32',
        deal: 'Deal is 88% claimed',
        image: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/59/810/M_p0108781059.jpg'
    }
    ]
    
export default data;