import { Layout, Menu, Row } from "antd";
import React, { FC } from "react";
import { useHistory } from "react-router-dom";
import { RouteNames } from "../routes";

const Navbar: FC = () => {
  const auth = true;
  const router = useHistory();
  console.log(router);
  return (
    <Layout.Header>
      <Row justify="end">
        {auth ? (
          <>
            <div style={{ color: "white" }}>Aleksei Starovoitov</div>
            <Menu theme="dark" mode="horizontal" selectable={false}>
              <Menu.Item onClick={() => console.log("Выйти")} key={1}>
                Выйти
              </Menu.Item>
            </Menu>
          </>
        ) : (
          <Menu theme="dark" mode="horizontal" selectable={false}>
            <Menu.Item onClick={() => router.push(RouteNames.LOGIN)} key={1}>
              Логин
            </Menu.Item>
          </Menu>
        )}
      </Row>
    </Layout.Header>
  );
};

export default Navbar;
