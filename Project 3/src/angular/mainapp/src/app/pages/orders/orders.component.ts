import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  name = "John Berger";

  orders = [
    {
        "orderProducts": [
            {
                "quantity": 1,
                "product": {
                    "id": 1,
                    "title": "On a Night of a Thousand Stars",
                    "description": "<b>In this moving, emotional narrative of love and resilience, a young couple confronts</b> <b>the start of Argentina's Dirty War in the 1970s, and a daughter searches for truth twenty years later.</b><br><br><i>New York, 1998</i><b>. </b>Santiago Larrea, a wealthy Argentine diplomat, is holding court alongside his wife, Lila, and their daughter, Paloma, a college student and budding jewelry designer, at their annual summer polo match and soiree. All seems perfect in the Larreas’ world—until an unexpected party guest from Santiago's university days shakes his usually unflappable demeanor. The woman's cryptic comments spark Paloma’s curiosity about her father’s past, of which she knows little.<br> <br>When the family travels to Buenos Aires for Santiago's UN ambassadorial appointment, Paloma is determined to learn more about his life in the years leading up to the military dictatorship of 1976. With the help of a local university student, Franco Bonetti, an activist member of H.I.J.O.S.—a group whose members are the children of the <i>d</i><i>esaparecidos</i>, or the “disappeared,” men and women who were forcibly disappeared by the state during Argentina’s “Dirty War”—Paloma unleashes a chain of events that not only leads her to question her family and her identity, but also puts her life in danger.<br><br>In compelling fashion, <i>On a Night of a Thousand Stars</i> speaks to relationships, morality, and identity during a brutal period in Argentinian history, and the understanding—and redemption—people crave in the face of tragedy.<br><br><i>​Includes a Reading Group Guide.</i>",
                    "creator": "Andrea Yaryura Clark",
                    "creationDate": "2022-03-01T05:00:00.000+00:00",
                    "imageUrl": "http://books.google.com/books/publisher/content?id=uBEyEAAAQBAJ&printsec=frontcover&img=1&zoom=6&edge=curl&imgtk=AFLRE7202cuwoX3gA8oe29L-HOCzxJWHg9ONfilbPiiX0BDniDcQqOFEpt0MjS7JuTH7va8LgrH-9bxQ979avHFngz7gLLEA0eqN-5jTA8OeFfD5rngbDU_QppURQFV_RRTVlWqSmQhG&source=gbs_api",
                    "category": "books",
                    "subcategory": "fiction",
                    "subsubcategory": "Romance",
                    "price": 13.99
                },
                "totalPrice": 13.99
            }
        ],
        "id": 1,
        "dateCreated": "03/27/2022",
        "status": "PAID",
        "userId": 0,
        "numberOfProducts": 1,
        "totalOrderPrice": 13.99
    }
]

  constructor(private service: OrderService) { }

  ngOnInit(): void {
    let temp = localStorage.getItem("user");
    if(temp!=null){
      this.name = JSON.parse(temp).name;
      let user_id = JSON.parse(temp).id;
      this.service.getOrderById(user_id).subscribe(response => {
        this.orders = response
      })
    }
  }

}
