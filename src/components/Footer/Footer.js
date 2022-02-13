import { GithubFilled, LinkedinFilled, MailFilled } from '@ant-design/icons';
import { Layout } from 'antd';
import React from 'react';

const { Footer } = Layout;
const FooterComponent = () => {
  return (
    <Footer className="footer">
      <p>Copyright © 2022 - Ibrahim Mohamed</p>

      <ul className="list-unstyled">
        <li>
          <a
            href="https://github.com/IbrahimMourad"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubFilled />
          </a>
        </li>
        <li>
          <a
            href="mailto:ibrahimm.mourad97@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MailFilled />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/ibrahimmourad97/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinFilled />
          </a>
        </li>
      </ul>
    </Footer>
  );
};

export default FooterComponent;
