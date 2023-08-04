let movie=
[
    {image:"image/image_1.jpg",link:"video/video_5.mp4",moviename:"Aval",year:"Year:2017",cast:"Cast:Siddharth,Andrea Jeremiah",rate:"Rating:4.0/5.0"},
    {image:"image/image_2.jpg",link:"video/video_15.mp4",moviename:"Bhahubali",year:"Year:2020",cast:"Cast:Prabhas,Tamanna",rate:"Rating:4.1/5.0"},
    {image:"image/image_3.jpg",link:"video/video_5.mp4",moviename:"Captain",year:"Year:2022",cast:"Cast:Arya,Kavya Shetty",rate:"Rating:3.8/5.0"},
    {image:"image/image_4.jpg",link:"video/video_15.mp4",moviename:"David",year:"Year:2015",cast:"Cast:Vikram,Jeeva",rate:"Rating:4.2/5.0"},
    {image:"image/image_5.jpg",link:"video/video_5.mp4",moviename:"Enemy",year:"Year:2022",cast:"Cast:Vishal,Arya",rate:"Rating:4.3/5.0"},
    {image:"image/image_6.jpg",link:"video/video_15.mp4",moviename:"Friendship",year:"Year:2001",cast:"Cast:Losliya,Harbhajan Singh",rate:"Rating:3.7/5.0"},
    {image:"image/image_7.jpg",link:"video/video_5.mp4",moviename:"Gatta Kusthi",year:"Year:2008",cast:"Cast:Vishnu",rate:"Rating:4.4/5.0"},
    {image:"image/image_8.jpg",link:"video/video_15.mp4",moviename:"Hero",year:"Year:2010",cast:"Cast:Sivakarthikeyan,Kalyani",rate:"Rating:3.6/5.0"},
    {image:"image/image_9.jpg",link:"video/video_5.mp4",moviename:"Iruthi Sutru",year:"Year:2020",cast:"Cast:R. Madhavan,Ritika Singh",rate:"Rating:4.9/5.0"},
    {image:"image/image_10.jpg",link:"video/video_15.mp4",moviename:"Jai Bheim",year:"Year:2021",cast:"Cast:Suriya",rate:"Rating:5.0/5.0"},
    {image:"image/image_11.jpg",link:"video/video_5.mp4",moviename:"K.G.F",year:"Year:2020",cast:"Cast:Yash,Srinidhi Shetty",rate:"Rating:4.8/5.0"},
    {image:"image/image_12.jpg",link:"video/video_15.mp4",moviename:"Love Today",year:"Year:2022",cast:"Cast:Pradeep,Ivana",rate:"Rating:4.2/5.0"},
    {image:"image/image_13.jpg",link:"video/video_5.mp4",moviename:"Maanadu",year:"Year:2022",cast:"Cast:Simpu",rate:"Rating:4.5/5.0"},
    {image:"image/image_14.jpg",link:"video/video_15.mp4",moviename:"naadodigal",year:"Year:2002",cast:"Cast:Sasikumar",rate:"Rating:4.0/5.0"},
    {image:"image/image_15.jpg",link:"video/video_5.mp4",moviename:"O Kadhal Kanmani",year:"Year:2018",cast:"Cast:DQ,Nithya Menen",rate:"Rating:4.3/5.0"},
    {image:"image/image_16.jpg",link:"video/video_15.mp4",moviename:"Paayum Puli",year:"Year:2003",cast:"Cast:Vishal,Kajal",rate:"Rating:3.8/5.0"},
    {image:"image/image_17.jpg",link:"video/video_5.mp4",moviename:"Queen",year:"Year:2004",cast:"Cast:RamyaKrishnan",rate:"Rating:3.8/5.0"},
    {image:"image/image_18.jpg",link:"video/video_15.mp4",moviename:"Raja Rani",year:"Year:2019",cast:"Cast:Arya,Jai",rate:"Rating:4.5/5.0"},
    {image:"image/image_19.jpg",link:"video/video_5.mp4",moviename:"Sita Ramam",year:"Year:2022",cast:"Cast:DQ,Mrunal Thakur",rate:"Rating:4.7/5.0"},
    {image:"image/image_20.jpg",link:"video/video_15.mp4",moviename:"Thaamirabharani",year:"Year:2006",cast:"Cast:Vishal,Muktha",rate:"Rating:4.5/5.0"},
    {image:"image/image_21.jpg",link:"video/video_5.mp4",moviename:"Udhayam",year:"Year:2018",cast:"Cast:Siddharth,Ashrita Shetty",rate:"Rating:4.2/5.0"},
    {image:"image/image_22.jpg",link:"video/video_15.mp4",moviename:"vinnaithandi varuvaya",year:"Year:2015",cast:"Cast:Simpu,Trisha",rate:"Rating:4.7/5.0"},
    {image:"image/image_23.jpg",link:"video/video_5.mp4",moviename:"Walter",year:"Year:2019",cast:"Cast:Sibiraj",rate:"Rating:3.7/5.0"},
    {image:"image/image_24.jpg",link:"video/video_15.mp4",moviename:"X Man",year:"Year:2007",cast:"Cast:Hugh Jackman",rate:"Rating:4.2/5.0"},
    {image:"image/image_25.jpg",link:"video/video_5.mp4",moviename:"Yaanai",year:"Year:2022",cast:"Cast:Arun Vijay,Priya Bhavani Shankar",rate:"Rating:4.0/5.0"},
    {image:"image/image_26.jpeg",link:"video/video_15.mp4",moviename:"Zero",year:"Year:2009",cast:"Cast:Ashwin Kakumanu,Shivada",rate:"Rating:3.7/5.0"},
    {image:"image/image_27.jpg",link:"video/video_5.mp4",moviename:"3",year:"Year:2005",cast:"Cast:Dhanush,Shruthi",rate:"Rating:4.5/5.0"},
    {image:"image/image_28.jpg",link:"video/video_15.mp4",moviename:"96",year:"Year:2020",cast:"Cast:Vijay Sethupathi,Trisha",rate:"Rating:4.7/5.0"},
];

let viewList = () =>
{
    let view="";
    for(let i=0;i<movie.length;i++)
    {
        view+="<div class='movie' onclick='details("+i+")'><img src="+movie[i].image+"><h3 class='name'>"+movie[i].moviename+"</h3><p>"+movie[i].year+"</p><p>"+movie[i].cast+"</p><p>"+movie[i].rate+"</p></div>";
      
    }
    document.getElementById("container").innerHTML=view;
}
let details=(i)=>
{
    let findex=i+1;
    let bindex=i-1
    document.getElementById("cancelid").style.display="flex";
    document.getElementById("viewimg").innerHTML="<img src="+movie[i].image+"></img>";
    if(i==movie.length-1)
    {
        findex=0;
    }
    else if(i==0)
    {
        bindex=movie.length-1;
    }
    let fb="<br><button class='leftbtn'onclick='details("+(bindex)+")'><</button><button class='rightbtn' onclick='details("+(findex)+")'>></button>"

    document.getElementById("cont").innerHTML="<h1><b>"+movie[i].moviename+"</b></h1><video controls autoplay width='100%'><source src="+movie[i].link+"></video><h3>"+movie[i].year+"</h3><h3>"+movie[i].cast+"</h3><h3>"+movie[i].rate+"</h3><button class='button' onclick=download("+i+")>Download</button>"+fb;

}

let cancel=()=>
{
    document.getElementById("cancelid").style.display="none";
}

let search= (value)=>
{
    let searchVar="";
    for(let i=0;i<movie.length;i++ ){
        if(movie[i].moviename.toLowerCase().includes(value) || movie[i].year.includes(value) || movie[i].cast.toLowerCase().includes(value))
        {
           
            
            searchVar+="<div class='movie' onclick='details("+i+")'><img src="+movie[i].image+"><h3>"+movie[i].moviename+"</h3><p>"+movie[i].year+"</p><p>"+movie[i].cast+"</p><p>"+movie[i].rate+"</p></div>";
        }
       
    }
    if(searchVar=="")
        document.getElementById("container").innerHTML="<h1 style='color:white;'>No Data Found</h1>";
    else
       
        document.getElementById("container").innerHTML=searchVar;

}