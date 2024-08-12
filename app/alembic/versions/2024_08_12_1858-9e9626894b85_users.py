"""users

Revision ID: 9e9626894b85
Revises: 
Create Date: 2024-08-12 18:58:27.887668

"""
from typing import Sequence, Union

import fastapi_users_db_sqlalchemy.generics
from alembic import op
import sqlalchemy as sa


revision: str = '9e9626894b85'
down_revision: Union[str, None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(length=320), nullable=False),
    sa.Column('hashed_password', sa.String(length=1024), nullable=False),
    sa.Column('is_active', sa.Boolean(), nullable=False),
    sa.Column('is_superuser', sa.Boolean(), nullable=False),
    sa.Column('is_verified', sa.Boolean(), nullable=False),
    sa.PrimaryKeyConstraint('id', name=op.f('pk_users'))
    )
    op.create_index(op.f('ix_users_email'), 'users', ['email'], unique=True)
    op.create_table('access_tokens',
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('token', sa.String(length=43), nullable=False),
    sa.Column('created_at', fastapi_users_db_sqlalchemy.generics.TIMESTAMPAware(timezone=True), nullable=False),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], name=op.f('fk_access_tokens_user_id_users'), ondelete='cascade'),
    sa.PrimaryKeyConstraint('token', name=op.f('pk_access_tokens'))
    )
    op.create_index(op.f('ix_access_tokens_created_at'), 'access_tokens', ['created_at'], unique=False)


def downgrade() -> None:
    op.drop_index(op.f('ix_access_tokens_created_at'), table_name='access_tokens')
    op.drop_table('access_tokens')
    op.drop_index(op.f('ix_users_email'), table_name='users')
    op.drop_table('users')
