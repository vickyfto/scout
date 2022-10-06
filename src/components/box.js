import { Col, Row } from "antd";
import { useState } from "react";

const BoxComponent = () => {
  const [color, setColor] = useState("");
  const [userClicked, setUserClicked] = useState(1);
  console.log("userClicked:", userClicked);

  const Boxs = [
    {
      id: 1,
      name: "Box 1",
    },
    {
      id: 2,
      name: "Box 2",
    },
    {
      id: 3,
      name: "Box 3",
    },
  ];

  const handleChangeColor = (box) => {
    setUserClicked(userClicked + 1);
    if (userClicked === 1) setColor("red");
    if (userClicked === 2) setColor("blue");
    if (userClicked === 3) setColor("green");
    if (userClicked === 4) setColor("");
    if (userClicked > 3) setUserClicked(1);
  };

  return (
    <>
      <Row
        justify="center"
        gutter={[
          { xs: 20, sm: 20, md: 20, lg: 20 },
          { xs: 30, sm: 20, md: 20, lg: 0 },
        ]}
        style={{ paddingTop: "40px" }}
      >
        {Boxs.map((box, i) => {
          return (
            <>
              <Col xs={22} sm={20} md={18} lg={5}>
                <div
                  onClick={() => handleChangeColor(box)}
                  style={{
                    border: "1px solid black",
                    width: "100%",
                    height: "200px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: color,
                  }}
                >
                  <div>{box.name}</div>
                </div>
              </Col>
            </>
          );
        })}
      </Row>
    </>
  );
};

export default BoxComponent;
