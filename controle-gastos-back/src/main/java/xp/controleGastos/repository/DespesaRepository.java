package xp.controleGastos.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import xp.controleGastos.model.Despesa;

@Repository
public interface DespesaRepository extends JpaRepository<Despesa, UUID> {
    
}
