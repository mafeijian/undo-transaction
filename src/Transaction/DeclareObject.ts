const DeclareObject = (className: string) => (clazz) => {
    clazz.prototype.className = className;
}

export { DeclareObject }