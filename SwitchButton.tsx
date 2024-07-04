const router = useRouter();
const lang = path.split("/")[1];
const t = getTranslation(String(lang)).Header;
const [language, setLanguage] = useState(String(t.english));
useEffect(() => {
    lang === "fr"
        ? setLanguage(String(t.french))
        : setLanguage(String(t.english));
}, []);

useEffect(() => {
    getUserRole().then((role) => {
        setIsAdmin(!!role);
    });
}, []);
 
 {isAdmin && (
          <li>
            <button
              onClick={() => {
                if (path.includes("client")) {
                  router.push(`/${lang}/admin`);
                } else {
                  router.push(`/${lang}/client`);
                }
              }}
              className='ml-4 rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
            >
              Switch to {path.includes("admin") ? "Client" : "Admin"} View
            </button>
          </li>
        )}