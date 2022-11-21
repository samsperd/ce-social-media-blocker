    const gernerateHtml = (pageName) => (
        `<section class="page_404">
            <div class="container">
                <div class="row">	
                    <div class="col-sm-12 ">
                        <div class="col-sm-10 col-sm-offset-1">
                            <div class="four_zero_four_bg">
                                <h1>404</h1>
                            </div>
            
                            <div class="contant_box_404">
                                <h3 class="h2">
                                    Look like you're getting distracted
                                </h3>
                
                                <p>GET BACK TO WORK</p>
            
                                <h1 class="text-center ">Studing > ${pageName} </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>`
    )

const gernerateStyling = () => (
    `
    <style>
        .page_404 {
            padding:10px 0; background:#fff; font-family: 'Arvo', serif;
            text-align: center;
        }
        
        .page_404 img {
            width:100%;
        }

        .text-center {
            font-size:70px;
        }

        .four_zero_four_bg {
            background-image: url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif);
            height: 400px;
            background-position: center;
        }
        
        
        .four_zero_four_bg h1 {
            font-size:80px;
        }
        
        .contant_box_404 h3 {
            font-size:50px;
        }
        .contant_box_404 p {
            font-size:65px;
            color: blue;
        }
                    
        .link_404 {			 
            color: #fff!important;
            padding: 10px 20px;
            background: #39ac31;
            margin: 20px 0;
            display: inline-block;
        }
        
        .contant_box_404 {
            margin-top:-40px;
        }
    </style>
    `
)

switch (window.location.hostname) {
    case "www.youtube.com":
        document.head.innerHTML =  gernerateStyling()
        document.body.innerHTML = gernerateHtml("Youtube")
        break;

    case "tailwindcss.com":
        document.head.innerHTML =  gernerateStyling()
        document.body.innerHTML = gernerateHtml("Tailwind")
        break;

    case "github.com":
        document.head.innerHTML =  gernerateStyling()
        document.body.innerHTML = gernerateHtml("Github")
        break;

    default:
        break;
}