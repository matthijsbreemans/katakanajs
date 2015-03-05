function ツ(query) {
    if (query) {
        if (window === this) {
            return new ツ(query);
        }
        this.e = document.querySelector(query);
        console.log(this.e);
        return this;
    } else {
        return {};
    }
}

ツ.prototype = {
    hide: function () {
        this.e.style.display = 'none';
        return this;
    },
    show: function () {
        this.e.style.display = 'inherit';
        return this;
    },
};