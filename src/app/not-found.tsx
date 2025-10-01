import { CTAButton } from '@/components/CTAButton';
import { Container } from '@/components/Container';

export default function NotFound() {
  return (
    <Container className="flex flex-1 flex-col items-center justify-center gap-4 py-24 text-center">
      <p className="text-xs uppercase tracking-[0.3em] text-primary-500">Ops!</p>
      <h1 className="text-4xl font-semibold text-primary-900">Pagina nao encontrada</h1>
      <p className="max-w-md text-sm text-primary-700/80">
        O recurso solicitado nao existe ou foi movido. Volte para a pagina inicial ou entre em
        contato para receber o link atualizado.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <CTAButton href="/" label="Ir para home" />
        <CTAButton href="/contato" label="Falar com Danilo" variant="secondary" />
      </div>
    </Container>
  );
}
