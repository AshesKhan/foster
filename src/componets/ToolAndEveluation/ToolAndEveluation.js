import React from "react";
import "../../App.css";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/tab";
import Row from "react-bootstrap/row";
import Col from "react-bootstrap/col";
// import Sonnet from 'react-bootstrap/';
import Sonnet from "react-bootstrap/ToggleButton";

function ToolAndEveluation() {
  const toolone = [
    {
      name: "Active Case Documents",
    },
    {
      name: "Panel Actions/Comments",
    },
    {
      name: "Panel Agenda",
    },
    {
      name: "Panel Minutes - Administrator",
    },
    {
      name: "Panel Minutes - Chair",
    },
    {
      name: "Panel Checklist",
    },
    {
      name: "Panel Outcome",
    },
  ];
  return (
    <div>
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                  <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col sm={9}>
                    <div className="col-lg revoke">
                      <div className="card p-2 mb-3">
                        <div className="card-body p-1">
                          <Tab.Content>
                            <Tab.Pane eventKey="first">
                              <div className="row tool">
                                {toolone.map((items) => {
                                  return (
                                    <div className="col-lg-3">
                                      <div className="card p-2 mb-3">
                                        <div className="card-body p-1">
                                          <p>{items.name}</p>
                                          <p></p>
                                        </div>
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                              {/* <div className="col-lg-3">

                        </div>
                        <div className="col-lg-3">

                        </div>
                        <div className="col-lg-3">

                        </div> */}

                              {/* <Sonnet /> */}
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                              <h3>hi444</h3>
                              {/* <Sonnet /> */}
                            </Tab.Pane>
                          </Tab.Content>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Tab.Container>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToolAndEveluation;
