export class Commande {
    id: number;
    clientName: string;
    orderDate: Date;
    items: Array<{ productId: number; quantity: number; price: number }>;
    totalAmount: number;

    constructor(
        id: number,
        clientName: string,
        orderDate: Date,
        items: Array<{ productId: number; quantity: number; price: number }>
    ) {
        this.id = id;
        this.clientName = clientName;
        this.orderDate = orderDate;
        this.items = items;
        this.totalAmount = this.calculateTotal();
    }

    private calculateTotal(): number {
        return this.items.reduce((total, item) => total + item.quantity * item.price, 0);
    }
}