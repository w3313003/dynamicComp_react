import React from 'react';
import ReactDOM from 'react-dom';

const compList = [
    {
        id: 1,
        component: 'Button',
        props: {
            title: "Button 1"
        }
    },
    {
        id: 2,
        component: 'Button',
        props: {
            title: "Button 2"
        }
    },
    {
        id: 3,
        component: 'Area',
        props: {
            title: "Area 2"
        }
    },
];

function register(compList) {
    let Components = {};
    compList.forEach(comp => {
        Components[comp.id] = {
            props: comp.props,
            // 组件路径
            renderFn: require(`./components/${comp.component}`).default
        };
    })
    return Components;
}

function App() {
    const Components = register(compList);
    console.log(Components);
    return (
        <div className="App">
            {Object.keys(Components).map(key => {
                const Comp = Components[key];
                return (
                    <Comp.renderFn key={key} {...Comp.props} />
                )
            })}
        </div>
    );
}
ReactDOM.render(<App />, document.getElementById('root'));


