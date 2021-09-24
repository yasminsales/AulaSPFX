import * as React from 'react';
import styles from './HelloWorld2.module.scss';
import { IHelloWorld2Props } from './IHelloWorld2Props';
import { escape } from '@microsoft/sp-lodash-subset';

import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";

export default class HelloWorld2 extends React.Component<IHelloWorld2Props, {}> {
  public render(): React.ReactElement<IHelloWorld2Props> {
    async function pnp() {
      const items: any[] = await sp.web.lists.getById(this.props.lists).items.get();
      console.log(items);
    }

    pnp();

    return (
      <div className={styles.helloWorld2}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <span className={styles.title}>Titulo: {this.props.Title}</span>
              <p className={styles.description}>Descrição: {escape(this.props.description)}</p>
              <span className={styles.title}>Phone: {this.props.phone}</span><br />
              <span className={styles.title}>Number: {this.props.numberValue}</span><br />
              <span className={styles.title}>List: {this.props.lists}</span><br />
              <a href="https://aka.ms/spfx" className={styles.button}>
                <span className={styles.label}>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
