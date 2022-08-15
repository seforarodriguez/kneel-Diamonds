import { getOrders, getMetals, getStyles, getSizes } from "./database.js"

const metals = getMetals()
const styles = getStyles()
const sizes = getSizes()

const buildOrderListItem = (order) => {
    const foundMetal = metals.find(
        (metal) => {
            return metal.id === order.metalId
        })
    const foundSize = sizes.find(
        (size) => {
            return size.id === order.sizeId
        })
    const foundStyle = styles.find(
        (style) => {
            return style.id === order.styleId
        })
        
    const totalCost = foundMetal.price + foundSize.price + foundStyle.price

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    return `<li>
            Order #${order.id} cost ${costString}
        </li>`
}

export const Orders = () => {
    const orders = getOrders()
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */

    let html = "<ul>"

    const listItems = orders.map((order) => {return buildOrderListItem(order)})

    html += listItems.join("")
    html += "</ul>"

    return html
}


// // Remember that the function you pass to find() must return true/false






