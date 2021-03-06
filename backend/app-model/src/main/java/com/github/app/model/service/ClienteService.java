package com.github.app.model.service;

import javax.ejb.Stateless;
import javax.inject.Inject;

import com.github.app.model.dao.ClienteDao;
import com.github.app.model.dao.DaoGenerico;
import com.github.app.model.entity.Cliente;

@Stateless
public class ClienteService extends ServicoGenerico<Cliente, Long>{

    @Inject
    private ClienteDao clienteDao;
    
    @Override
    protected DaoGenerico<Cliente, Long> getDao() {
        return clienteDao;
    }

}
