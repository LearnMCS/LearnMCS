import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '首先',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        你需要一台能够流畅运行Minecraft任意Java版本的
        Windows/Mac/Linux电脑.
      </>
    ),
  },
  {
    title: '其次',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        你需要具备一定的基础知识和理解能力，
        例如如何使用控制台，如何安装/使用Java，
        以及编写简易的脚本(bat/sh)等.
      </>
    ),
  },
  {
    title: '最后',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        无论你想学习开哪种类型的服务器，
        请确保你有足够的金钱，
        用于服务器租赁/插件购买/定制等等.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
