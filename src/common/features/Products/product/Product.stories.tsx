import {Meta, StoryObj} from "@storybook/react";
import Product from "./Product";
import shorts1 from "../../../../assets/productImage/shorts1.jpg";
import {withRouter} from "storybook-addon-react-router-v6";


const meta = {
    component: Product,
    decorators: [withRouter],
    tags: ['autodocs'],
    title: 'Components/Product',
} satisfies Meta<typeof Product>

export default meta
type Story = StoryObj<typeof meta>

// История для основной кнопки
export const Base: Story = {
    args: {
        product: {
            id: '1',
            title: 'Шорты мужские Demix',
            description: 'Беговые шорты Demix позаботятся о вашем комфорте во время занятий спортом.\n' +
                '\n' +
                'ОТВЕДЕНИЕ ВЛАГИ\n' +
                'Технологичная ткань MOVI-tex wick эффективно отводит влагу от тела во время интенсивных тренировок.\n' +
                'СВЕТООТРАЖАЮЩИЕ ЭЛЕМЕНТЫ\n' +
                'Благодаря светоотражателям пробежки в условиях плохой видимости станут более безопасными.\n' +
                'УДОБСТВО РЕГУЛИРОВКИ\n' +
                'Сделать посадку идеальной поможет пояс с регулировочным шнурком.\n' +
                'ПРАКТИЧНОСТЬ\n' +
                'Для самых важных вещей предусмотрен небольшой внутренний карман.\n' +
                'КОМФОРТНАЯ ПОСАДКА\n' +
                'Благодаря прямому крою и эластичному материалу в шортах удобно двигаться.',
            price: 10,
            image: shorts1
        }
    },
}