export default function PrivacyPage() {
    return (
        <div className="container py-20 max-w-3xl">
            <h1 className="text-3xl font-bold mb-6">Política de Privacidad</h1>
            <div className="prose dark:prose-invert">
                <p>Última actualización: {new Date().toLocaleDateString()}</p>
                <p>Esta política de privacidad describe cómo se recopila y utiliza la información en este sitio web personal.</p>

                <h3>1. Información que recopilamos</h3>
                <p>Solo recopilamos la información que tú nos proporcionas voluntariamente a través del formulario de contacto (Nombre, Email, Mensaje).</p>

                <h3>2. Uso de la información</h3>
                <p>La información se utiliza exclusivamente para responder a tus consultas o propuestas laborales.</p>

                <h3>3. Cookies</h3>
                <p>Este sitio puede utilizar cookies técnicas indispensables para el funcionamiento del sitio (como la preferencia de modo oscuro). No utilizamos cookies de rastreo publicitario.</p>

                <h3>4. Contacto</h3>
                <p>Para cualquier duda legal, puedes escribir a través del formulario de contacto.</p>
            </div>
        </div>
    )
}
