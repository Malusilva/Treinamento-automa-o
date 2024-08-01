///<reference types="cypress"/>

beforeEach(() => {
    cy.visit('https://hml-agendamentocirurgico.hsl.org.br/?token=eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAifQ.ZFg30_ZIydScVDFeKCh_ti5vMX-qhrWBugiKrYhVRFJqbjCLvUe2ls43ZmY-UpIVznvAZ-5Uao2IyVcbZD894dd8weYkn6863x1zGEtcxtc5ZwBrCXJ0y6MpE13dOt_QnlYlFn-HXOhaqgpa_JcbVSkT0NTQCCBcl8k0Mkl1oXvnQi8wDs6NqkXrjAvILIHo4N2LuQ0ymUuczvXn7rMybzh5QJ6vICWVp6aztj87FvhTr8gcmuzJOjeUoS5Cuy9ln_OHyMJtX_yqrnKblj3Gqh1BIGrzzEYRCETDnZ4bqxf_bPfc5Cl34uof3XhrBQCDRuOr4xELB41BQyfA4bLZyA.irsyXW0fYmo9j4GW.nqeL2UWCGBDtDsvEPXmyXh27nTCMNkaSpVBQ3dW08SxYvXgaIYJMi2tSFLCzlkLvp0Rs50Mc9MMg2fQH6XMdzbkJma5KL--wmR8nHoVm79YpW1ew627dC4zrE_4EEOkX-stYyNJyEmHpCvpiU_Dge4Ay8Hah9_RmYj6pGDfnJp_uAN4G58s5QLUSK3xY5q41uch_FQ-XDu10BmkdrUiufroANx_WmFU79Ew3ePaP1vtF6K5ohmbyMfSSsYGlXT0tKfrK17yHXUErYa_9vfblsgdfGtpMoXqWyF-xFqWtS9hroQz2I0JZ1qY-DQtsn-7_SdWXuqkHH3MLV3QXDEwW6qEGZK78RSbbPIO-1eiqkOSYbEhuE3DlQuTASjG3Q3L3k6dKtasyH_Rp-FBf_fqloWU-kXY_CNttHIZS_J-YBcTCSrmBZx9loexiLbe7s2ZV-eRzeyK08I74WE-KpN_gQ8n6Ig5Wnj6vUSJ_cXH2IL7d8aY0RtkuE29Lnwpief2e1OFzroFKS-iJwAaoe9ATmASztHBb6OmXz1awg634BAV2opKLgFbutgTZFJSrSH2-b0eTWSqG6o2iCV_pz50R7PAoqGbJ_Bbjd8dhz6JgY3WD1FZdfyA8ocSS2jIvAH8rGFJFH5xNtZRCUXVCnUCyGKS6-W-uKqkU7Bc5fhvsg-QcQfFBfGcNCKBdy2sem3NEvtdFA6Opl5Ena0GE1psvppAi0PE4C6MMTnR6sMMijaluIq98PEVRrQHrXWsuQc3PLfonPLvbijd4gsxlmSsg-0gXUfz40UA1UvKxoiEtl5HH80Ncfl6XYUas8aREMU58Ouib1qohBxKDgwOFpYZQEMGuRrqo2mqjenGOO5AQ99E1yphWbccDKGaGGtw7HL28Q0igdjZz5ZODCz-1EGrxKlYdCf_lMnCXGrhM3fAi9UUeG_DGEKFS8K-FBqTJd3KQ5efiI8QBjuzOKllZYCV0NXpvWPiOsXfUbwY9BKTyr8n4pzxVCX9my-whbIMcWGKuLzRbFLRfDjAxTzPhwUBCJgXbU7e6EOL5tb-Xok1pJ96n8JgDSg-99KVGcLJy5xPa42xHe04QE-x02VObVA9eZHE0Sy-x9JBTmicsToVSZTPbUepDy_3kCZzudsQ1vftzvwG7lEuqw2BlUVidxZj0H97hkfMKuAY02N_9yAMCA_3lAjCn1VsT0ASJUUKvMFE1wIzw-Y1WjySYwbVZaZ9__ai_xCf69QokWpZ-YFUSjezx8dwBEY74m3oLdb5QwhaYq-cAOXPyrbeSwQ.7byN_LdWl4rTishU0ZdAoQ&nm_usuario=fclario')
});

describe('Criando Nova Solicitação de Cirúrgia', () => {
    it('Deve visitar aba secundária', () => {
        cy.get('.sc-JrDLc').click()
        cy.get('.sc-uVWWZ > :nth-child(2)').click()
        cy.get('.sc-JrDLc').click()

    });

    it.only('Deve fazer cadastro caso o CPF não seja encontrado', () => {
        cy.get('.sc-JrDLc').click()
        cy.get('.sc-uVWWZ > :nth-child(2)').click()
        // Adiciona uma espera explícita para garantir que a página está completamente carregada
        //cy.wait(5000)
        // Aumenta o tempo de espera para encontrar o elemento
        //cy.get('.sc-gvPdwL > .sc-bypJrT > .tabFocus > .sc-dSCufp > [data-testid="input_id"]').type('Tanjiro kamado Teste Maria')
        // cy.get('.hpkCFc > .sc-bypJrT > .tabFocus > .sc-dSCufp > [data-testid="input_id"]').type('01/01/2000')
        // cy.get('#sex-button > #icon > svg').click()
        // cy.get('#sex-0').click()
        // cy.get('#tmp-47ad807e65a38-button').click()
    });
});
