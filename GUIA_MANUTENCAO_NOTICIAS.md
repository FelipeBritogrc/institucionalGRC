
# 📰 Guia Prático de Manutenção de Notícias

## 📁 Estrutura Simplificada
Sistema de notícias integrado na homepage:

### Arquivos Importantes:
- `src/data/news.ts` - **ÚNICO arquivo de notícias**
- `src/pages/NoticiaDetalhada.tsx` - Página de detalhes
- `src/components/NewsExpandableSection.tsx` - Seção na homepage

---

## 🚀 Como Adicionar uma Nova Notícia

### Passo 1: Editar `src/data/news.ts`
**Localização:** Adicione no **INÍCIO** do array `NEWS_DATA`

```typescript
export const NEWS_DATA: NewsItem[] = [
  {
    id: "7", // ⚠️ Use o próximo número sequencial
    title: "Título da Nova Notícia",
    subtitle: "Subtítulo opcional", // OPCIONAL
    img: "URL_DA_IMAGEM",
    summary: "Resumo breve para aparecer no card (máximo 2 linhas)",
    content: `Conteúdo completo da notícia aqui...

Pode usar múltiplos parágrafos separados por linhas duplas.

Para links: <InlineLink href="https://exemplo.com">texto do link</InlineLink>`,
    date: "DD/MM/AAAA", // Data atual
    readTime: "X min", // OPCIONAL
    author: "Nome do Autor", // OPCIONAL
    category: "Categoria"
  },
  // ... manter notícias existentes
];
```

### Passo 2: Gerenciar o Limite
- **Máximo recomendado:** 6 notícias no array
- **Se passar de 6:** Remova as mais antigas do final do array

---

## 🖼️ Resoluções de Imagens

### Para Cards/Thumbnails na Homepage:
- **Resolução:** 1200x675px (16:9)
- **Peso máximo:** 500KB
- **Formatos:** JPG, PNG, WebP

### Para Página de Detalhes:
- **Resolução:** 1920x1080px (16:9) ou maior
- **Peso máximo:** 1MB
- **Formatos:** JPG, PNG, WebP

### Dicas Importantes:
- **Use sempre proporção 16:9** para melhor layout
- **Otimize as imagens** antes de usar
- **Prefira JPG** para fotos e PNG para logos
- **Teste em dispositivos móveis** após alterar

---

## ✏️ Como Editar Informações de uma Notícia

### Localização: `src/data/news.ts`

**Campos que você pode alterar:**

| Campo | Descrição | Obrigatório | Exemplo |
|-------|-----------|-------------|---------|
| `title` | Título principal | ✅ SIM | "Nova Loja em João Pessoa" |
| `subtitle` | Subtítulo | ❌ Opcional | "Ampliando nossa presença na capital" |
| `img` | URL da imagem | ✅ SIM | "https://imagem.com/foto.jpg" |
| `summary` | Resumo para o card | ✅ SIM | "Inauguração prevista para 2025..." |
| `content` | Conteúdo completo | ✅ SIM | "O Grupo RedeCompras anuncia..." |
| `date` | Data (DD/MM/AAAA) | ✅ SIM | "15/06/2024" |
| `readTime` | Tempo de leitura | ❌ Opcional | "3 min" |
| `author` | Autor da notícia | ❌ Opcional | "Assessoria de Imprensa" |
| `category` | Categoria | ✅ SIM | "Expansão" |

---

## 🔗 Como Adicionar Links no Conteúdo

### Sintaxe para Links:
```typescript
content: `Texto normal aqui.

Clique para <InlineLink href="https://exemplo.com">acessar o site</InlineLink> e veja mais.

Mais texto normal aqui.`
```

### Exemplo Real:
```typescript
content: `Participe do evento!

Para se inscrever <InlineLink href="https://www.smcrono.com.br/evento/2185/corrida-em-familia-rede-compras">clique aqui</InlineLink> e garante sua vaga.`
```

---

## 📍 Como Trocar Imagens das Notícias

### Onde Alterar:
**Arquivo:** `src/data/news.ts`
**Campo:** `img: "URL_DA_IMAGEM"`

```typescript
{
  id: "1",
  title: "Título",
  img: "https://nova-url-da-imagem.com/imagem.jpg", // ← ALTERAR AQUI
  // ... resto dos campos
}
```

### Checklist para Imagens:
- [ ] ✅ Proporção 16:9
- [ ] ✅ Qualidade boa (não pixelizada)
- [ ] ✅ Tamanho adequado (ver tabela acima)
- [ ] ✅ URL acessível publicamente
- [ ] ✅ Testada em mobile e desktop

---

## 🎯 Onde Ver as Mudanças

### Na Homepage:
- **Seção:** "Últimas Notícias" (ID: #noticias)
- **Layout:** 3 notícias principais + expansível para o resto
- **Navegação:** Menu "Notícias" direciona para esta seção

### Página de Detalhes:
- **URL:** `https://seusite.com/noticias/ID_DA_NOTICIA`
- **Botão Voltar:** Retorna para seção de notícias na homepage
- **Imagem:** Usa a mesma do card, mas em tamanho maior

---

## ⚠️ Regras Importantes

### ✅ Sempre Faça:
- Use IDs únicos e sequenciais (1, 2, 3, 4...)
- Adicione notícias novas no **INÍCIO** do array
- Mantenha máximo 6 notícias
- Use imagens otimizadas em proporção 16:9
- Teste os links antes de publicar
- Verifique em mobile e desktop

### ❌ Nunca Faça:
- Não altere IDs de notícias existentes
- Não remova notícias do meio do array
- Não use imagens muito pesadas
- Não deixe campos obrigatórios vazios
- Não use imagens em proporções diferentes de 16:9

---

## 🛠️ Checklist Completo

### Ao Adicionar Nova Notícia:
- [ ] ✅ ID único e sequencial
- [ ] ✅ Título atrativo e claro
- [ ] ✅ Categoria definida
- [ ] ✅ Imagem 1200x675px (cards) ou maior
- [ ] ✅ Summary de máximo 2 linhas
- [ ] ✅ Data no formato DD/MM/AAAA
- [ ] ✅ Links testados (se houver)
- [ ] ✅ Não passou de 6 notícias total
- [ ] ✅ Testado na homepage
- [ ] ✅ Testado página de detalhes
- [ ] ✅ Testado em mobile

### Ao Editar Notícia Existente:
- [ ] ✅ Não alterar o ID
- [ ] ✅ Manter campos obrigatórios
- [ ] ✅ Testar nova imagem (se alterada)
- [ ] ✅ Verificar links (se alterados)
- [ ] ✅ Confirmar layout na homepage
- [ ] ✅ Confirmar página de detalhes

---

## 🎨 Layout Atual das Notícias

### Homepage - Seção de Notícias:
- **Primeira notícia:** Card grande (2 colunas no desktop)
- **Outras 2 principais:** Cards menores (1 coluna cada)
- **Notícias extras:** Grid 3 colunas (aparecem ao expandir)
- **Botão:** "Ver Todas as Notícias" (se houver mais de 3)

### Navegação:
- **Menu "Notícias":** Rola suavemente para seção na homepage
- **Botão "Voltar":** Das páginas de detalhes volta para seção

---

## 📞 Resolução de Problemas

### Problemas Comuns:

1. **Notícia não aparece:** 
   - Verifique se está no início do array
   - Confirme que tem ID único

2. **Imagem não carrega:** 
   - Verifique se a URL está correta
   - Teste a URL diretamente no navegador

3. **Imagem distorcida:** 
   - Confirme se está em proporção 16:9
   - Redimensione se necessário

4. **Link não funciona:** 
   - Verifique a sintaxe do InlineLink
   - Teste o link separadamente

5. **Layout quebrado:** 
   - Verifique todos os campos obrigatórios
   - Confirme que não há caracteres especiais quebrando o código

### Onde Buscar Ajuda:
- Confira este guia novamente
- Verifique exemplos nas notícias existentes
- Compare com notícias que funcionam
- Teste sempre em dispositivos diferentes
