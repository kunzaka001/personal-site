function XDivider() {
    return (
        <div className="my-8 flex items-center" aria-hidden="true">
            <div className="h-px flex-1 bg-red-900/60" />
            <p className="px-2 font-mono text-[10px] tracking-[0.2em] text-red-500 whitespace-nowrap md:px-4 md:text-sm md:tracking-[0.45em] select-none pointer-events-none">
                x x x x x x x x x
            </p>
            <div className="h-px flex-1 bg-red-900/60" />
        </div>
    );
}

export default XDivider;