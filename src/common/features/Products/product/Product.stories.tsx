import {Meta, StoryObj} from "@storybook/react";
import Product from "./Product";
import shorts1 from "../../../../assets/productImage/shorts1.jpg";
import {withRouter} from "storybook-addon-react-router-v6";
import {dataBase} from "../../../../store/database";


const meta = {
    component: Product,
    decorators: [withRouter],
    tags: ['autodocs'],
    title: 'Components/Product',
} satisfies Meta<typeof Product>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {
    args: {
        product: dataBase[0]
    },
}