class Component {
    constructor(templateSelector, containerSelector) {
        this.template = Handlebars.compile($(templateSelector).html());
        this.container = $(containerSelector);
    }
    render(data, empty) {
        if(empty) {
            this.container.empty();
        }
        const compiledHtml = this.template(data);
        this.container.append(compiledHtml);
    }
}

class Renderer {
    constructor() {
        this.components = {
            expense: new Component(EXPENSES_TEMPLATE_SELECTOR, EXPENSES_CONTAINER_SELECTOR)
        }
    }

    renderExpenses(expenses, empty = true) {
        this.components.expense.render({expenses}, empty);
    }
}