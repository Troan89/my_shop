import {Meta, StoryObj} from "@storybook/react";
import {withRouter} from "storybook-addon-react-router-v6";
import {dataBase} from "../../../store/database";
import ProductList from "./ProductList";
import {Provider} from "react-redux";
import {store} from "../../../store/store";
import React from "react";


const meta = {
    component: ProductList,
    tags: ['autodocs'],
    title: 'Components/ProductList',
    decorators: [
        withRouter,
        (Story) => (
            <Provider store={store}>
                <Story/>
            </Provider>
        ),

    ],
} satisfies Meta<typeof ProductList>

export default meta
type Story = StoryObj<typeof meta>

// История для основной кнопки
const Template = (args: any) => <ProductList {...args} />;

export const Default = Template.bind({});
// @ts-ignore
Default.args = {
    product: dataBase
};