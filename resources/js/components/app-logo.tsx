export default function AppLogo({ className = '' }) {
    return (
        <div className={`flex aspect-square items-center justify-center ${className}`}>
            <img src={'/img/app-icon.png'} alt={'AudioRender application logo'} />
        </div>
    );
}
