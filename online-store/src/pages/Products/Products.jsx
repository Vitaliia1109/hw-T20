import { useState } from "react";
import { Card, Button, Dropdown } from "react-bootstrap";
import TotalPrice from "../../components/TotalPrice/TotalPrice";
import "./Products.css";

const products = [
  {
    id: 1,
    title: "Golden Retriever Puppy",
    description: "Adorable and friendly puppy, perfect for families.",
    price: 500,
    image:
      "https://www.akc.org/wp-content/uploads/2020/07/Golden-Retriever-puppy-standing-outdoors.jpg",
  },
  {
    id: 2,
    title: "Siamese Cat",
    description: "Elegant and affectionate cat with striking blue eyes.",
    price: 300,
    image:
      "https://images.wagwalkingweb.com/media/daily_wag/blog_articles/hero/1678934108.5188236/everything-you-need-to-know-about-siamese-cats.png",
  },
  {
    id: 3,
    title: "African Grey Parrot",
    description: "Intelligent and talkative bird, great for bird lovers.",
    price: 800,
    image:
      "https://images.squarespace-cdn.com/content/v1/5a766a60bce176c268d99786/1643397967220-G4WMBTX32CM95XR3ZPO4/African_Grey_Parrot_RWD.jpg?format=1000w",
  },
  {
    id: 4,
    title: "Ball Python",
    description: "Low-maintenance pet snake with beautiful patterns.",
    price: 150,
    image: "https://www.exotic-pets.co.uk/data/images/10458l.jpg",
  },
  {
    id: 5,
    title: "Guinea Pig",
    description: "Friendly and social rodent, ideal for children.",
    price: 40,
    image:
      "https://blog.omlet.us/wp-content/uploads/sites/6/2022/11/Black-and-white-long-haired-guinea-pig-in-autumnal-leaves-950x647.jpg",
  },
  {
    id: 6,
    title: "Tropical Fish",
    description: "Colorful and lively fish for your aquarium.",
    price: 20,
    image:
      "https://www.thesprucepets.com/thmb/iVWjaOWX6bomqFr8QrSVxXYE5l8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-613667092-70c8db2422aa4f9b943d568c1ef33e8a.jpg",
  },
  {
    id: 7,
    title: "Holland Lop Rabbit",
    description: "Cute and cuddly rabbit with floppy ears.",
    price: 60,
    image:
      "https://i.pinimg.com/564x/96/63/f1/9663f172a7e5cf0ae1aca18d6f575f7b.jpg",
  },
  {
    id: 8,
    title: "Tropical Fish",
    description: "Beautiful and easy-to-care-for fish with vibrant colors.",
    price: 15,
    image:
      "https://seatechaquariums.com/wp-content/uploads/2019/07/Tropical-Fish-Defined-_-162088514-1-624x371.jpeg",
  },
  {
    id: 9,
    title: "Leopard Gecko",
    description: "Low-maintenance lizard, great for beginners.",
    price: 50,
    image:
      "https://static.wixstatic.com/media/d2fb58_e0d3b0523d8d4366972a37b3e3aa3146~mv2.jpg/v1/fill/w_492,h_326,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Leopard%20Gecko6.jpg",
  },
  {
    id: 10,
    title: "Dwarf Hamster",
    description: "Small and playful rodent, suitable for small spaces.",
    price: 25,
    image:
      "https://supremepetfoods.com/wp-content/uploads/2020/03/Campbells-Russian-Dwarf.jpg.webp",
  },
];

const Products = ({
  handleBuy,
  totalPrice,
  showTotalPrice,
  setShowTotalPrice,
}) => {
  const [selectedColor, setSelectedColor] = useState(
    Array(products.length).fill("Dropdown button")
  );

  const handleSelectColor = (index, color) => {
    const newSelectedColors = [...selectedColor];
    newSelectedColors[index] = color;
    setSelectedColor(newSelectedColors);
  };

  const buyProduct = (productPrice) => {
    handleBuy(productPrice);
    setShowTotalPrice(true);
  };

  return (
    <div className="container mt-4">
      <div className="total-price">
        {showTotalPrice && <TotalPrice totalPrice={totalPrice} />}
      </div>
      <div className="row">
        {products.map((product, index) => (
          <div key={product.id} className="col-md-4 mb-4">
            <Card>
              <Card.Img
                variant="top"
                src={product.image}
                style={{ height: "350px", width: "100%", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>Price: ${product.price}</Card.Text>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {selectedColor[index]}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item
                      onClick={() => handleSelectColor(index, "Red")}
                    >
                      Red
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => handleSelectColor(index, "Blue")}
                    >
                      Blue
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => handleSelectColor(index, "Green")}
                    >
                      Green
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Button
                  variant="primary"
                  className="mt-2"
                  onClick={() => buyProduct(product.price)}
                >
                  Buy
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
