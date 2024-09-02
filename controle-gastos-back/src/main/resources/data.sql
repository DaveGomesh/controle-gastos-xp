INSERT INTO funcionario (id_funcionario, nome) values ('0fc0366c-a490-44b0-8854-1390c235d8da', 'Valter Oliveira');

INSERT INTO Despesa (id_despesa, descricao, tipo_despesa, valor, data, status_despesa, fk_funcionario) VALUES
-- ('6f9a8b74-2c4b-4d2b-86bb-e9a5e5870c4b', 'Jantar com clientes em restaurante', 'ALIMENTACAO', 52.0, '2024-07-15', 'PENDENTE', '0fc0366c-a490-44b0-8854-1390c235d8da'),
('cc5a9b1e-89f7-4c2b-b317-2a56abf4c1e4', 'Passagem para visita técnica', 'TRANSPORTE', 150.98, '2024-07-16', 'PENDENTE', '0fc0366c-a490-44b0-8854-1390c235d8da'),
('8e3c7f41-2d77-4033-9d9a-8b9a72fd2348', 'Arbnb de 3 dias', 'HOSPEDAGEM', 95.00, '2024-07-20', 'PENDENTE', '0fc0366c-a490-44b0-8854-1390c235d8da');
