const [names, setNames] = useState<string>("")
const [loggedIn, setLoggedIn] = useState<User | null>(null)
const [theme, setTheme] = useState<'light' | 'dark'>('light')