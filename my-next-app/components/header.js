import Link from "next/link";

export default function Header() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <Link class="navbar-brand" href="/">Navbar</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                        <li class="nav-item" >
                                <Link href="/" className="nav-link">
                                    Home
                                </Link>

                            </li>

                            <li class="nav-item" >
                                <Link href="/about" className="nav-link">
                                    About
                                </Link>

                            </li>

                            <li class="nav-item" >
                                <Link href="/contact" className="nav-link">
                                    Contact
                                </Link>

                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}